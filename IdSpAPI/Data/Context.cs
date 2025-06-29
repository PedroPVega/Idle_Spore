namespace IdSpAPI.Data;
using IdSpAPI.Models;
using Microsoft.EntityFrameworkCore;

public class Context : DbContext
{
  // Make DBSets for all your models
    public DbSet<Player> Players { get; set; } = null!;
    public string DbPath { get; private set; }

    public Context()
    {
        // Path to SQLite database file
        DbPath = "EFIdSpAPI.db";
    }
   // The following configures EF to create a SQLite database file locally
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // Use SQLite as database
        options.UseSqlite($"Data Source={DbPath}");
        // Optional: log SQL queries to console
        //options.LogTo(Console.WriteLine, new[] { DbLoggerCategory.Database.Command.Name }, LogLevel.Information);
    }
}