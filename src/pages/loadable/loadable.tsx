import React,{ ComponentType, ReactElement, Suspense, lazy } from "react"
type FuncType = () => Promise<{default:ComponentType<any>}>
const loadAble = (ImportFunc : FuncType) : (() => ReactElement) => {
  const LazyComponet = lazy(ImportFunc)
  return () => {
    return (
      <>
        <Suspense fallback={<>loadings..</>}>
          <LazyComponet />
        </Suspense>
      </>
      )
  }
}
export default loadAble