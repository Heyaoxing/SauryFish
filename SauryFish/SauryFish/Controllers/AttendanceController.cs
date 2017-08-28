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
        public ResultObject<List<DescriptDto>> GetDescript()
        {
            var result = Repository.Repository.GetDescript();
            return result;
        }
    }
}