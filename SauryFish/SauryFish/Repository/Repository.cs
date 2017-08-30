using Dapper;
using SauryFish.Data;
using SauryFish.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SauryFish.Repository
{
    public class Repository
    {
        public static ResultObject<List<DescriptDto>> GetDescript()
        {
            var result = new ResultObject<List<DescriptDto>>();
            result.Data = new List<DescriptDto>();
            try
            {
                var now = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.AddDays(-1).Day, 0, 0, 0);
                var attend = new List<AttendanceRecord>();
                using (var conn = DapperFactory.CrateMysqlConnection())
                {
                     attend = conn.Query<AttendanceRecord>("select a.* from attendancecach as a JOIN personsetting as b on a.EnrollNumber=b.EnrollNumber where a.AttendancedOn>=@AttendancedOn GROUP BY a.EnrollNumber order by AttendancedOn DESC;", new { AttendancedOn = now }).ToList();
                }

                foreach(var item in attend)
                {
                    result.Data.Add(new DescriptDto()
                    {
                        EnrollNumber= item.EnrollNumber,
                        Name = item.EnrollNumber.ToString(),
                        State = "正常",
                        Date= item.AttendancedOn.ToString("yyyy年MM月dd"),
                        Time= item.AttendancedOn.ToString("HH:mm:ss")
                    });
                }
                result.Result = true;
                result.Message = "Data count:" + result.Data.Count+ ",Query count" + attend.Count;
            }
            catch (Exception ex)
            {
                result.Result = false;
                result.Message = ex.Message;
            }
            return result;
        }
    }
}
