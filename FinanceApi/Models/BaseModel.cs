using MongoDB.Bson.Serialization.Attributes;

namespace FinanceApi.Models
{
    public class BaseModel(Guid? userId)
    {
        [BsonId]
        public Guid Id { get; set; } = Guid.NewGuid();
        public Guid? UserId { get; set; } = userId;
    }
}
