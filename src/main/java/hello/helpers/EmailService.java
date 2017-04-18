package hello.helpers;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by Hector on 4/14/2017.
 */
@Configuration
@ComponentScan(basePackages = "hello")
public class EmailService  {

    @Bean
    public JavaMailSenderImpl mailSender() {

//        <property name="host" value="smtp.gmail.com" />
//        <property name="port" value="587" />
//        <property name="username" value="hectorsoftwarecorp@gmail.com" />
//        <property name="password" value="Armandorocha1-" />
//
//        <!-- The name of the property, following JavaBean naming conventions -->
//        <property name="javaMailProperties">
//            <props>
//                <prop key="mail.transport.protocol">smtp</prop>
//                <prop key="mail.smtp.auth">true</prop>
//                <prop key="mail.smtp.starttls.enable">true</prop>
//                <prop key="mail.debug">true</prop>
//            </props>
//        </property>

        JavaMailSenderImpl javaMailSender = new JavaMailSenderImpl();

        javaMailSender.setProtocol("smtp");
        javaMailSender.setHost("smtp.gmail.com");
        javaMailSender.setPort(587);
        javaMailSender.setUsername("hectorsoftwarecorp@gmail.com");
        javaMailSender.setPassword("Armandorocha1-");
        javaMailSender.getJavaMailProperties().setProperty("mail.transport.protocol","smtp");
        javaMailSender.getJavaMailProperties().setProperty("mail.smtp.auth","true");
        javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.enable","true");
        javaMailSender.getJavaMailProperties().setProperty("mail.smtp.starttls.required","true");
        javaMailSender.getJavaMailProperties().setProperty("mail.smtp.ssl.trust", "smtp.gmail.com");
        javaMailSender.getJavaMailProperties().setProperty("mail.debug","true");

        return javaMailSender;
    }

}
