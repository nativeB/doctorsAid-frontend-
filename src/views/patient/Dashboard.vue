<template>
  <b-container fluid>
    <b-row align-h="between">
      <AppName name="DoctorsAid" />
      <b-col cols="8"></b-col>
      <UserOptions :userObj="getPatient" type="patient" />
    </b-row>
    <b-row align-v="center" class="mx-auto">
      <Card
        :class="{ hideCard: hide }"
        v-b-modal.modal-1
        v="secondary"
        header="New"
        content="Click to report new issue"
      />
      <Card
        v-for="(i, idx) in categories"
        :class="{ hideCard: hide }"
        :key="idx"
        :v="i.color"
        :header="i.name"
        :content="frameContent(i.status)"
      />
    </b-row>

    <b-row class="mx-auto">
      <!-- display categories new answered -->
      <IssuesCategories :categories="categories" v-slot:default="slotProps">
        <!-- list of issues under categories -->
        <IssuesList
          :list="getIssuesByStatus(slotProps.status)"
          v-slot:default="innerSlotProps"
        >
          <!-- answers under the categories -->
          <p>{{ innerSlotProps.data.details }}</p>
          <InnerList idPre="slot" :idx="innerSlotProps.idx">
            <p class="card-text">{{ innerSlotProps.data.response || nores }}</p>
            <b-button
              v-if="innerSlotProps.data.response"
              @click="markAsResolved(innerSlotProps.data)"
              variant="outline-primary"
              >Mark as resolved</b-button
            >
          </InnerList>
        </IssuesList>
        <div v-if="getIssuesByStatus(slotProps.status).length === 0">
          {{ nodata }}
        </div>
      </IssuesCategories>
    </b-row>
    <CreateIssue title="Create Issue" />
    <ViewResponse title="View Response" :issue="viewingResponse" />
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/card.vue";
import AppName from "@/components/AppName.vue";
import UserOptions from "@/components/UserOptions.vue";
import IssuesCategories from "@/components/IssuesCategories.vue";
import IssuesList from "@/components/IssuesList.vue";
import CreateIssue from "@/components/CreateIssue.vue";
import InnerList from "@/components/InnerList.vue";
import ViewResponse from "@/components/ViewResponse.vue";
export default {
  name: "dashboard",
  data() {
    return {
      user: {},
      categories: [
        { name: "In progress", color: "danger", status: "new" },
        { name: "Answered", color: "warning", status: "answered" },
        { name: "Resolved", color: "success", status: "resolved" }
      ],
      hide: false,
      viewingResponse: "",
      nores: "No response as of yet",
      nodata: "Nothing to show yet"
    };
  },
  // eslint-disable-next-line vue/no-unused-components
  components: {
    Card,
    AppName,
    UserOptions,
    IssuesCategories,
    IssuesList,
    CreateIssue,
    InnerList,
    ViewResponse
  },
  computed: {
    ...mapGetters("patient", ["getPatient", "getIssuesByStatus"])
  },
  methods: {
    ...mapActions("patient", ["fetchPatient", "fetchIssues", "markResolved"]),
    markAsResolved(e) {
      const { _id } = e;
      this["markResolved"]({ _id, issue: { status: "resolved" } });
    },
    frameContent(i) {
      const issues = this.getIssuesByStatus(i).length;
      const endLabel = i === "new" ? "in progress" : i;
      const message = (e, m) => `${e} issues ${m}`.toLowerCase();
      return message(issues, endLabel);
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
      if (!token) return this.$router.push({ path: "patient/login" });

      this.axios.defaults.headers.common["token"] = token;
      if (!this.getPatient.token) this.fetchPatient();
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
