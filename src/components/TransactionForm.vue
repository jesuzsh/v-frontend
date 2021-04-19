<template>
  <img alt="Transaction logo" src="../assets/transaction.jpeg" />
  <h1>Transaction Form</h1>

  <SchemaForm :schema="mySchema" />
  <BaseButton type="submit">Submit</BaseButton>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import BaseButton from './BaseButton.vue'
import FormText from './FormText.vue'
import BaseButton from './BaseButton.vue'
import FormCheckbox from './FormCheckbox.vue'
import FormSelect from './FormSelect.vue'
import { SchemaForm, useSchemaForm } from 'formvuelate'
export default defineComponent({
  name: 'TransactionForm',
  components: { SchemaForm, BaseButton },
  setup: () => {
    const formModel = ref({})
    useSchemaForm(formModel)

    const mySchema = ref({
      name: {
        component: FormText,
        label: "Name"
      },
      amountUSD: {
        component: FormText,
        label: "Amount"
      },
      cardOptions: {
        component: FormSelect,
        label: "Card used for transaction",
        required: true,
        options: ["amex", "chime"]
      },
      categoryOption: {
        component: FormSelect,
        label: "Category of transaction",
        required: true,
        options: ["Groceries", "Clothing", "Materials"]
      },
      isEssential: {
        component: FormCheckbox,
        label: "Is this category essential?"
      },
    })

    return { mySchema }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
