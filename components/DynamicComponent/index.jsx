const DynamicComponent = async ({ name }) => {
  const ComponentModule = await import(`@/components/Library/${name}`)
  const Component = ComponentModule.default

  return <Component />
}

export default DynamicComponent
