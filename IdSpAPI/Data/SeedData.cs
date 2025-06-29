using IdSpAPI.Models;
namespace IdSpAPI.Data;
public static class SeedData
{
    public static void Init()
    {
        using var context = new Context();
        // Look for existing content
        if (context.Players.Any())
        {
            return; // DB already filled
        }

        // Add objects
        Player Claverie = new()
        {
            Id = 0,
            EmailAdress = "pfer0956@gmail.com",
            Pseudo = "La Creature",
            Created = DateTime.Now,
        };

        context.Players.AddRange(Claverie);

        /*
        // Add courses
        Course chemistry = new()
        {
            Id = 1,
            Title = "Chemistry",
            Credits = 3,
        };
        Course microeconomics = new()
        {
            Id = 2,
            Title = "Microeconomics",
            Credits = 3,
        };
        context.Courses.AddRange(chemistry, microeconomics);

        // Add enrollments
        context.Enrollments.AddRange(
            new Enrollment
            {
                Student = carson,
                Course = chemistry,
                Grade = Grade.A
            },
            new Enrollment
            {
                Student = carson,
                Course = microeconomics,
                Grade = Grade.C
            },
            new Enrollment
            {
                Student = alonso,
                Course = calculus,
                Grade = Grade.B
            },
            new Enrollment
            {
                Student = anand,
                Course = chemistry,
            },
            new Enrollment
            {
                Student = anand,
                Course = microeconomics,
                Grade = Grade.B
            },
            new Enrollment
            {
                Student = barzdukas,
                Course = chemistry,
                Grade = Grade.C
            }
        );
        */

        // Commit changes into DB
        context.SaveChanges();
    }
}