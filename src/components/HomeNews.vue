<template>
  <div class="news">
    <div class="container py-5">
      <h2 class="m-auto pb-3 mb-5 border-bottom border-primary border-4 w-fit">
        最新消息
      </h2>
      <ul class="news-list list-unstyled w-fit m-auto">
        <li v-for="(news, i) in news" :key="i">
          <p class="border-bottom pb-2"><span class="news-date text-warning me-3">{{news.creatAt}}</span>{{news.content}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news: [
        {
          creatAt: '2021-09-07',
          content:
            '9/7-9/20 持續採「二級防疫措施」，懇請各位營友們務必協助和配合相關防疫措施！'
        },
        {
          creatAt: '2021-08-20',
          content:
            '中秋慶團圓，9/18-9/20 期間營區全面85折'
        },
        {
          creatAt: '2021-07-26',
          content:
            '疫情微解封，露營區將陸續有條件開放營業，請愛露營的夥伴再忍耐一下下~~'
        },
        {
          creatAt: '2021-06-01',
          content:
            '近日山區午後降雨機率較高，建議營友們盡可能在中午前抵達營區'
        }
      ]
    }
  }
}
</script>
