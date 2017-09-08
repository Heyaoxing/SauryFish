using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SauryFish.Dto
{
    public class RecordDto
    {
        public int EnrollNumber { set; get; }
        public string Name { set; get; }
        public DateTime Attendanced { set; get; }
        public string AttendancedOn {
            get
            {
                return Attendanced.ToString("yyyy年MM月dd日 HH:mm:ss");
            }
        }
    }
}
