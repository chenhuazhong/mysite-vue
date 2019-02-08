<template>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
       <el-form-item label="账号" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
    <el-button @click="login">登录</el-button>
  </el-form-item>
</el-form>
</template>
<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      }
      this.axios({
        method: 'get',
        url: '/apis/API/user/check/?username=' + value
      }).then(data => {
        if (data.data.code === 400) {
          callback(new Error(data.data.data))
        } else if (data.data.code === 200) {
          callback()
        } else {
          callback(new Error(data.data.data))
        }
      })
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios({
            method: 'post',
            url: 'apis/API/user/regsiter/',
            data: {
              username: this.ruleForm2['age'],
              password: this.ruleForm2['pass']
            }
          }).then(data => {
            this.$router.push({path: '/login'})
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<style>
.el-form {
    width: 400px;
    margin: 80px auto auto auto
}
</style>
