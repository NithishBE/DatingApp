using System.Collections.Generic;
using System.Threading.Tasks;

namespace DatingApp.API.Models.Data
{
    public interface IDatingRespository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();

         Task<User> GetUser(int id); 
    }
}