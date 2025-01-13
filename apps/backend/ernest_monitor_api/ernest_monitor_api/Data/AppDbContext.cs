// Data/AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using SampleAzureApi.Models;

namespace SampleAzureApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Threats> Threats { get; set; }
    }
}
