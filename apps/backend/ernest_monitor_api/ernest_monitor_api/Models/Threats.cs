using System;
using System.ComponentModel.DataAnnotations;

namespace SampleAzureApi.Models
{
    public class Threats
    {
        [Key]
        public int ThreatID { get; set; }
        public string RegionName { get; set; }
        public int UserId { get; set; } // Zmienione na int
        public string ThreatType { get; set; }
        public int? DangerLevel { get; set; } // Nullable
        public int? TrustLevel { get; set; } // Nullable
        public string? Description { get; set; } // Nullable
        public byte[]? Files { get; set; } // Zmienione na byte[] (varbinary w bazie danych)
        public string? Status { get; set; } // Nullable
        public DateTime? CreatedAt { get; set; } // Nullable
        public DateTime? UpdatedAt { get; set; } // Nullable
    }
}