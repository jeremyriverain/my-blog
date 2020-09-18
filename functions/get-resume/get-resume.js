// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const pdfLib = require('pdf-lib')

const metadataPdf = (pdfDoc) => {
  const author = 'Jérémy Riverain'
  pdfDoc.setAuthor(author)
  pdfDoc.setCreator(author)
  pdfDoc.setSubject("Jérémy Riverain's resume")
  pdfDoc.setKeywords(['resume'])
  pdfDoc.setTitle("Jérémy Riverain's resume")
  pdfDoc.setLanguage('en')
  pdfDoc.setCreationDate(new Date())
}

const generatePdf = async () => {
  const pdfDoc = await pdfLib.PDFDocument.create()
  metadataPdf(pdfDoc)

  const page = pdfDoc.addPage(pdfLib.PageSizes.A4)
  const helveticaFont = await pdfDoc.embedFont(pdfLib.StandardFonts.Helvetica)
  page.setFont(helveticaFont)
  page.setFontSize(12)

  const { height } = page.getSize()
  page.moveTo(40, height - 40)
  page.drawText('Hello World!')

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true })
  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}

exports.handler = async (event, context) => {
  try {
    const pdfBytes = await generatePdf()
    const buffer = Buffer.from(pdfBytes)

    return {
      statusCode: 200,
      body: buffer.toString('base64'),
      headers: {
        'Content-type': 'application/pdf',
        'Content-disposition':
          'attachment; filename="jeremy_riverain_resume.pdf"; filename*="jeremy_riverain_resume.pdf"'
      },
      isBase64Encoded: true
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString()
    }
  }
}
