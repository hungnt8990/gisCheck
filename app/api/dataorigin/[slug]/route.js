export const GET = async (request, params) => {
  const typeDataCheck = ['table', 'feature-dataset']

  if (params?.slug == undefined || !typeDataCheck.includes(params?.slug)) {
    return Response.json({ status: false, message: 'Check data exists' })
  }

  let data = ['1']

  return Response.json({
    status: true,
    message: 'get data success',
    data: data
  })
}
