using System;
using System.ComponentModel.DataAnnotations;

namespace SampleAzureApi.Models
{
    public class Threads
    {
        [Key]
        public int ThreadID { get; set; }
        [Required]
        public string RegionName { get; set; }
        //[Required]
        //public string UserId { get; set; }
        //[Required]
        //public string ThreadType { get; set; }
        //public int DangerLevel { get; set; }
        //public int TrustLevel { get; set; }
        //public string Description { get; set; }
        //public string Files { get; set; }
        //[Required]
        //public string Status { get; set; }
        //public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        //public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}