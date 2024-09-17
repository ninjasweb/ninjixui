const SinglePage = (params) => {
  const { slug } = params.params
  console.log(slug)
  return (
    <div>
      <h1>Single Page</h1>
    </div>
  )
}

export default SinglePage
