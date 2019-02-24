<template>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
       <el-form-item label="账号" prop="age">
    <el-input v-model.number="ruleForm2.age"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    <el-button @click="regsiter">注册</el-button>
    <a href="javascript:;" class="qq-login">
    <i class='iconfont icon-qq-copy-copy-copy qq-img'></i><span>QQ登录</span></a>
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
          callback()
        } else if (data.data.code === 200) {
          callback(new Error('用户名不存在'))
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
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(this.ruleForm2)
        if (valid) {
          this.axios({
            method: 'post',
            url: 'API/user/login/',
            data: {
              username: this.ruleForm2.age,
              password: this.ruleForm2.pass
            }
          }
          ).then(data => {
            window.localStorage['access'] = data.data['access']
            window.localStorage['username'] = data.data['username']
            window.localStorage['user_id'] = data.data['user_id']
            this.$router.push({path: '/header'})
          }).catch(eor => {
            alert('登录失败，用户名或密码错误')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    regsiter () {
      this.$router.push({path: '/regsiter'})
    }
  }
}
</script>

<style>
.el-form {
    width: 400px;
    margin: 80px auto auto auto
}
.qq-img {
  margin: 16px;
  width: 10px;
  height: 10px;
  line-height: 12px;
}
a {
  text-decoration: none;
  color: #8a8a8a
}

</style>
