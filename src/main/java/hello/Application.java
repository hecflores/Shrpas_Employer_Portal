package hello;

import hello.storage.StorageService;
import org.apache.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableConfigurationProperties({hello.storage.StorageProperties.class})
public class Application {
    public static Logger log = Logger.getLogger(Application.class.getName());
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner init(StorageService storageService){
        return (args) -> {
            storageService.deleteAll();
            storageService.init();
        };
    }

}