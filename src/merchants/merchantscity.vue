<template>
  <Row type="flex" :gitter="24">
    <Row type="flex" :gutter="12">
      <Col :span="10">
        <Select filterable @on-change="searchByCity" clearable v-model="city.id">
          <Option v-for="city in cities" :value="city.id" :key="city.id" :label="city.name"></Option>
        </Select>
      </Col>
      <Col :span="10">
        <Select filterable clearable v-model="category.id" @on-change="searchByCategory">
          <Option
            v-for="category in categories"
            :value="category.id"
            :key="category.id"
            :label="category.name"
          ></Option>
        </Select>
      </Col>
      <Col :span="4">
        <Button @click="search" type="primary">搜索</Button>
      </Col>
    </Row>
    <Divider dashed />
    <Row>
      <Col :span="6">
        <h1>商家列表</h1>
      </Col>
      <Col :span="3" :offset="15">
        <Button type="error" size="small" @click="remove_all">一键删除</Button>
        <Button type="error" size="small" @click="export1" v-if="show2" v-model="city.name">导出为Excel</Button>
        <Button type="error" size="small" @click="down" v-if="show1" v-model="city.name">下载Excel</Button>
      </Col>
      <Col :span="24">
        <Table border stripe :columns="columns" :data="merchants" ref="table"></Table>
      </Col>
    </Row>
    <Row type="flex" :gutter="24">
      <Col :span="24">
        <Page
          :total="total"
          :current="current_page"
          :page-size="20"
          show-total
          show-elevator
          @on-change="page"
        ></Page>
      </Col>
    </Row>
  </Row>
</template>
<script>
import {
  Table,
  Row,
  Col,
  Button,
  Divider,
  Page,
  Select,
  Option
} from "iview"
export default {
  components: {
    Table,
    Row,
    Col,
    Button,
    Divider,
    Page,
    Select,
    Option
  },
  data() {
    return {
      query: "",
      query1: "",
      query2: "",
      merchantsSearch: [],
      show2: true,
      show1: false,
      columns: [
        {
          title: "ID",
          key: "id"
        },
        {
          title: "城市",
          key: "city_name"
        },
        {
          title: "区域",
          key: "areaname"
        },
        {
          title: "平均价格",
          key: "avgprice",
          sortable: true
        },
        {
          title: "平均评分",
          key: "avgscore",
          sortable: true
        },
        {
          title: "分类名称",
          key: "catename"
        },
        {
          title: "商家地址",
          key: "address"
        },
        {
          title: "商家名称",
          key: "name"
        },
        {
          title: "商家电话",
          key: "phone"
        },
        {
          title: "创建时间",
          key: "created_at"
        },
        {
          title: "操作",
          key: "action",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary"
                  },
                  on: {
                    click: () => {
                      this.show(params.row.id)
                    }
                  }
                },
                "查看"
              ),
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.edit(params.row.id)
                    }
                  }
                }, "修改"),
              h(
                "Button",
                {
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                },
                "删除"
              )
            ])
          }
        }
      ],
      merchants: [],
      total: 0,
      current_page: 1,
      cities: [],
      categories: [],
      category: {
        id: "",
        name: ""
      },
      city: {
        id: "",
        name: ""
      }
    }
  },
  created() {
    this.$http.get(`/cities/list`).then(res => {
      this.cities = res.data.cities
    })
    this.city.id = this.$route.params.id
    this.$http
      .get(`/merchants?page=${1}&city_id=${this.$route.params.id || ''}`)
      .then(res => {
        this.merchants = res.data.merchants
        this.total = res.data.total
        this.current_page = res.data.current_page
      })
  },
  methods: {
    show(merchant_id) {
      this.$router.push(`/merchants/${merchant_id}`)
    },
    remove(index) {
      let merchant = this.merchants[index]
      this.$http.delete(`merchants/${merchant.id}`).then(res => {
        if (res.data.status === 1) {
          this.merchants.splice(index, 1)
          alert(res.data.notice)
        } else {
          alert(res.dasta.notice)
        }
      })
    },
    edit(merchant_id) {
      console.log(111, merchant_id)
      this.$router.push(`/merchants/${merchant_id}/edit`)
    },
    remove_all() {
      this.$http.delete(`merchants/deleteall`).then(res => {
        if (res.data.status === 1) {
          this.merchants = []
          alert(res.data.notice)
        } else {
          alert(res.data.notice)
        }
      })
    },
    export1() {
      this.$http.get(`/merchants/export_excel?city_id=${this.city.id}`).then(res => {
        if (res.data.status === 1) {
          this.show2 = false
          this.show1 = true
          alert(res.data.notice)
        }
      })
    },
    down() {
      this.$http.get(`/merchants/excel_file_path?city_id=${this.city.id}`).then(res => {
        if (res.data.status === 1) {
          window.open(res.data.file_path)
          this.show1 = false
          this.show2 = true
          alert("正在下载")
        }
      })
    },
    page(page) {
      this.$http
        .get(`/merchants?city_id=${this.city.id || ""}&page=${page}`)
        .then(res => {
          this.merchants = res.data.merchants
          this.total = res.data.total
        })
    },
    searchByCity(value) {
      this.$http.get(`/categories/list?city_id=${value || ""}`).then(res => {
        this.categories = res.data.categories
      })
      this.$http.get(`/merchants?city_id=${value}`).then(res => {
        this.merchants = res.data.merchants
        this.total = res.data.total
      })
    },
    searchByCategory() {
      this.$http.get(`/merchants?category_id=${this.category.id}`).then(res => {
        this.merchants = res.data.merchants
        this.total = res.data.total
      })
    },
    search() {
      this.$http.get(`/merchants?city_id=${this.city.id || ""}&category_id=${this.category.id || ""}`).then(res => {
          this.merchants = res.data.merchants
          this.total = res.data.total
        })
    }
  }
}
</script>
