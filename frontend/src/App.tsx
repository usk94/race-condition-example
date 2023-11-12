import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const App = () => {
  const { data, isLoading } = useSWR("http://127.0.0.1:4000/", fetcher)

  if (isLoading) <p>待機中！</p>
  console.log("data", data)

  return <div>hoge</div>
}

export default App
