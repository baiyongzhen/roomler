<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          Warning
        </v-card-title>
        <v-card-text>Are you sure you want to delete this room?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="grey" outlined @click="no()">
            No
          </v-btn>
          <v-btn color="primary" outlined @click="yes()">
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    room: {
      type: Object,
      default: null
    }
  },
  methods: {
    no () {
      this.$emit('removeCancel', this.room)
    },
    yes () {
      this.$emit('remove', this.room)
    }
  }
}
</script>
