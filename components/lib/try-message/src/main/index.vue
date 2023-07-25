<template>
    <div class='try-message'>
      Message, {{ title  }}
    </div>
</template>

<script>

export default {
    name: 'TryMessage',
    props: {
      title: {
        type: String,
        default: '提示'
      },
    }
}
</script>