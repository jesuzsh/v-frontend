<template>
  <div>
    <label :for="uuid" v-html="labelHtml" />
    <select
      :value="modelValue"
      :required="required"
      :id="uuid"
      @input="update($event.target.value)"
    >
      <option v-if="!disableNoSelection">-</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FormSelect',
  props: {  
    modelValue: { required: true },
    required: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Object,
      default: () => {},
    },
    uuid: {
      type: Number,
      default: 0,
    },
    label: { type: String, required: true },
    options: { type: Array, required: true },
    disableNoSelection: { type: Boolean, default: false },
    validations: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    labelHtml() {
      const requiredHtml =
        this.validations._exclusive && this.validations._exclusive.required
          ? ' <span class="label--required">*</span>'
          : "";
      return this.label + requiredHtml;
    },
  },
  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    },
  },
})

</script>


<style>
select {
  min-width: 30%;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 10px;
  font-size: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: white;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
  linear-gradient(135deg, gray 40%, transparent 50%), linear-gradient(to right,
  #ccc, #ccc);
  background-position: calc(100% - 20px) calc(1em + 0px), calc(100% - 15px)
  calc(1em + 0px), calc(100% - 2.5em) 0.4em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
}
</style>
