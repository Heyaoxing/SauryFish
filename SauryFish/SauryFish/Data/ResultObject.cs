using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SauryFish.Data
{
    /// <summary>
    /// 通用返回实体
    /// </summary>
    public class ResultObject
    {

        /// <summary>
        /// 返回结果
        /// </summary>
        public bool Result { set; get; }
        /// <summary>
        /// 返回状态码
        /// </summary>
        /// <summary>
        /// 返回提示信息
        /// </summary>
        public string Message { set; get; }

    }

    /// <summary>
    /// 通用返回实体
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class ResultObject<T> : ResultObject
    {
        /// <summary>
        /// 自定义返回信息
        /// </summary>
        public T Data { set; get; }
    }
}
