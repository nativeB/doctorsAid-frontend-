<template>
  <b-container fluid>
    <b-row align-h="between">
      <AppName name="DoctorsAid" />
      <b-col cols="8"></b-col>
      <UserOptions :userObj="getAdmin" type="admin" />
    </b-row>
    <b-row align-v="center" class="mx-auto">
      <Card
        v-for="(i, idx) in categories"
        :class="{ hideCard: hide }"
        :key="idx"
        :v="i.color"
        :header="i.name"
        :content="frameContent(i.status)"
      />
    </b-row>
    <!-- @mouseenter="hide=true" @mouseleave="hide=false" -->
    <b-row class="mx-auto">
      <!--  display categories -->
      <IssuesCategories :categories="categories" v-slot:default="slotProps">
        <!-- display issues by user name -->
        <IssuesList
          idPre="slot1"
          :list="getIssues"
          v-slot:default="innerSlotProps"
        >
          <div
            v-if="
              filterIssues(innerSlotProps.data.issues, slotProps.status)
                .length > 0
            "
          >
            <p>
              {{
                `${innerSlotProps.data.firstName} ${innerSlotProps.data.lastName}`
              }}
            </p>
            <InnerList :idx="innerSlotProps.idx">
              <!-- <b-button v-if="innerSlotProps.data.response" @click="setIssueToView(innerSlotProps.data)" variant="outline-primary">View</b-button> -->
              <div
                @click="initResponse(i, innerSlotProps.data)"
                :key="idx"
                v-for="(i, idx) in filterIssues(
                  innerSlotProps.data.issues,
                  slotProps.status
                )"
              >
                <b-card>
                  <p class="card-text">{{ i.details }}</p>
                </b-card>
              </div>
            </InnerList>
          </div>
        </IssuesList>
      </IssuesCategories>
    </b-row>
    <RespondIssue
      id="respond"
      title="Respond to issue"
      :cIssue="cIssue"
      :cPatient="cPatient"
    />
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/card.vue";
import AppName from "@/components/AppName.vue";
import UserOptions from "@/components/UserOptions.vue";
import IssuesCategories from "@/components/IssuesCategories.vue";
import IssuesList from "@/components/IssuesList.vue";
import RespondIssue from "@/components/RespondIssue.vue";
import InnerList from "@/components/InnerList.vue";
// import ViewResponse from '@/components/ViewResponse.vue'
export default {
  name: "dashboard",
  data() {
    return {
      user: "admin",
      categories: [
        { name: "New", color: "danger", status: "new" },
        { name: "Answered", color: "warning", status: "answered" },
        { name: "Resolved", color: "success", status: "resolved" },
        { name: "All", color: "success", status: "all" }
      ],
      hide: false,
      cIssue: {},
      cPatient: {}
    };
  },
  components: {
    Card,
    AppName,
    UserOptions,
    IssuesCategories,
    IssuesList,
    InnerList,
    RespondIssue
  },
  computed: {
    ...mapGetters("admin", ["getAdmin", "getIssues", "getIssuesStatsByStatus"])
  },
  methods: {
    ...mapActions("admin", ["fetchAdmin", "fetchIssues"]),
    initResponse(e, i) {
      this.cIssue = e;
      this.cPatient = i;
      if (this.cIssue && this.cPatient) this.$bvModal.show("respond");
    },
    frameContent(i) {
      const issues = this.getIssuesStatsByStatus(i);
      const message = (e, m) => `${e} issues ${m}`.toLowerCase();
      const msg = i === "all" ? "in total" : i;
      return message(issues, msg);
    },
    filterIssues(data, i) {
      return data.filter(e => {
        if (i !== "all") return e.status === i;
        else return e.status;
      });
    },
    setIssueToView(e) {
      const { response } = e;
      if (response) {
        this.viewingResponse = response;
        this.$bvModal.show("modal-2");
      }
    },

    initAll() {
      const token = localStorage.getItem("token");
      if (!token) return this.$router.push({ path: "admin/login" });

      this.axios.defaults.headers.common["token"] = token;
      if (!this.getAdmin.token) this.fetchAdmin();
      this.fetchIssues();
    }
  },
  created() {
    this.initAll();
  }
};
</script>

<style scoped>
.hideCard {
  height: 40px;
  overflow: hidden;
}
</style>
