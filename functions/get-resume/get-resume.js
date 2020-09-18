// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const pdfLib = require('pdf-lib')

const generatePdf = async () => {
  const pdfDoc = await pdfLib.PDFDocument.create()
  const page = pdfDoc.addPage(pdfLib.PageSizes.A4)
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
