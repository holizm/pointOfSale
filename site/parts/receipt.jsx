export default ({ posTransaction }) => <article class='receipt'>
    <h2 class='number'>{posTransaction.number}</h2>
    <time class='date'>{posTransaction.transactionDate}</time>
    <span class='total'>{posTransaction.total}</span>
    <span class='currency'>{posTransaction.currency?.title}</span>
</article>
