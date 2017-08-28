using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SauryFish.Data
{
    public class AttendanceRecord
    {
        public long RecordId { set; get; }
        public int EnrollNumber { set; get; }
        public DateTime AttendancedOn { set; get; }
        public DateTime CreatedOn { set; get; }

    }
}
