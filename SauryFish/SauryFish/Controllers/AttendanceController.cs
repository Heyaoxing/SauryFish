using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SauryFish.Data;
using SauryFish.Dto;
namespace SauryFish.Controllers
{
    [Produces("application/json")]
    [Route("[controller]/[action]")]
    public class AttendanceController : Controller
    {
        /// <summary>
        /// 首页数据
        /// </summary>
        /// <returns></returns>
        public ResultObject<List<DescriptDto>> GetDescript()
        {
            var result = Repository.Repository.GetDescript();
            return result;
        }

        /// <summary>
        /// 查找详细
        /// </summary>
        /// <param name="param"></param>
        /// <returns></returns>
        [HttpPost]
        public ResultPaging<RecordDto> GetRecord([FromBody]RecordParam param)
        {
            var result = Repository.Repository.GetRecord(param);
            return result;
        }
    }
}