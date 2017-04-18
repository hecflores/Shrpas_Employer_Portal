//package hello.helpers;
//
//import com.fasterxml.jackson.core.JsonGenerator;
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.SerializerProvider;
//import com.fasterxml.jackson.databind.ser.std.StdSerializer;
//import hello.models.LoginRequest;
//
//import java.io.IOException;
//
///**
// * Created by Hector on 2/15/2017.
// */
//public class LoginRequestSerializer extends StdSerializer<LoginRequest> {
//    public LoginRequestSerializer() {
//        this(null);
//    }
//
//    public LoginRequestSerializer(Class<LoginRequest> t) {
//        super(t);
//    }
//
//    @Override
//    public void serialize(
//            LoginRequest value, JsonGenerator jgen, SerializerProvider provider)
//            throws IOException, JsonProcessingException {
//
//        jgen.writeStartObject();
//        jgen.writeStringField("userid", value.getUserID());
//        jgen.writeStringField("password", value.getPassword());
//        jgen.writeStringField("role",value.getRoleID());
//        jgen.writeEndObject();
//    }
//}
//
