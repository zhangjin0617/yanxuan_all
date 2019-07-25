import axios from 'axios'
export default function ajax(url, data={}, type='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if (type==='GET') {//get请求
      promise=axios.get(url,{
        params:data//配置对象
      })
    }else{//post请求
      promise=axios.post(url,data)
    }
    promise.then(response=>{//成功
      resolve(response.data)
    }
    ).catch(error=>{//失败
      alert('请求出错: '+error.message)
    })
  }

  )
}