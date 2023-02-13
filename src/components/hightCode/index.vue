<template>
  <div v-highlight class="highlight-style">
    <span class="copy-btn" @click="copyHandle(codeString)">复制</span>
    <pre class="javascript">
      <!-- 把标签放到同一行 免去DOM中空格毒字符串的影响-->
      <code class="code-string">    {{ codeString }} </code>
     </pre>
  </div>
</template>


<script lang="ts" setup>
  import {ElMessage} from 'element-plus'
  import ClipboardJS from 'clipboard'

  const props = defineProps({
    // eslint-disable-next-line vue/require-default-prop
    codeString: String
  })
  console.log(props)
  const copyHandle = (text: string) => {
    const clipboard = new ClipboardJS('.copy-btn', {
      text: () => text
    })
    clipboard.on('success', () => {
      ElMessage.success('复制成功!')
      clipboard.destroy()
    })
    clipboard.on('error', () => {
      ElMessage.success('粘贴失败!')
      clipboard.destroy()
    })
    console.log('text', text)

  }

</script>

