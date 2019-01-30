<template>
    <div>
        <p>组件嵌套 <span>{{ msg }}</span></p>
    </div>
</template>

<script>
/* eslint-disable */
import header from '@/components/header'
export default { 
    props: ['msg'],
    name: 'test1',
}
</script>
