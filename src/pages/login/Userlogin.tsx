import {UserApi} from "@/apis";
import { Button, Checkbox, Form, Input, Layout } from "antd";
import React, { FC, ReactElement, useState } from "react";
import "@/assets/CSS/common.less"
interface loginType  {
  userName:string,
  userPassword:string,
  userNumber:boolean
}
const Login:FC = ():ReactElement => {
  const [loading,setLoading] = useState<boolean>(false)
  const onFinish = (values:loginType)=>{
    UserApi.login(values)
    return
  }
  return (
    <>
      <Layout>
        <div className="login-container">
          <div className="login-left">
            login-left
          </div>
          <div className="login-right">
            <Form
              name="basic"
              labelCol={{span:8}}
              wrapperCol={{span:16}}
              initialValues={{userSetNumber:true}}
              onFinish={onFinish}
              autoComplete="off">
              <Form.Item
                label="登录名称"
                name="userName"
                rules={[{required:true,message:"请输入登录名称"}]}>
                <Input placeholder="请输入登录名称" size="large"></Input>
              </Form.Item>
              <Form.Item
                label="登录密码"
                name="userPassword"
                rules={[{required:true,message:"请输入登录密码"}]}>
                <Input.Password  placeholder="请输入登录密码" size="large"></Input.Password>
              </Form.Item>
              <Form.Item
                name="userSetNumber"
                valuePropName="checked"
                wrapperCol={{offset:8,span:16}}>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item wrapperCol={{offset:8,span:16}}>
                <Button
                  loading={loading}
                  size="large"
                  type="primary"
                  htmlType="submit"
                  style={{width:'100%'}}>
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    </>)
}
export default Login