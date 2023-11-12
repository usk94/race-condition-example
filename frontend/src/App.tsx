import useSWR from "swr"
import useSWRMutation from "swr/mutation"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const cardUpdater = async (url: string) => {
  await fetch(url, {
    method: "POST",
  })
}

const cartUpdater = async (url: string, { arg }: { arg: { item: string } }) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      cart: arg,
    }),
  })
}

const App = () => {
  const { trigger: postCard, isMutating: isMutatingCard } = useSWRMutation(
    "http://127.0.0.1:4000/api/v1/cards",
    cardUpdater
  )
  const { trigger: postCart, isMutating: isMutatingCart } = useSWRMutation(
    "http://127.0.0.1:4000/api/v1/carts",
    cartUpdater
  )
  const { isLoading } = useSWR("http://127.0.0.1:4000/api/v1/cards", fetcher)
  const handleClick = async () => {
    await postCard()
    await postCart({ item: "item1" })
  }

  if (isLoading) <p>fetchCard待機中!</p>
  if (isMutatingCard) <p>postCard待機中!</p>
  if (isMutatingCart) <p>postCart待機中!</p>
  return (
    <button type="button" onClick={handleClick}>
      button!
    </button>
  )
}

export default App
