import { useRoutes } from 'react-router-dom'
import { AsyncRouter } from './asyncRouter'

export const AppRoutes = () => {
  const element = useRoutes(AsyncRouter)
  console.log(AsyncRouter,'AsyncRouter.......')
  return <>{element}</>
}
