package com.example;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@EnableEurekaClient
@SpringBootApplication
public class AmqpEmisorApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmqpEmisorApplication.class, args);
	}
    @Bean
    public ApplicationRunner runner(AmqpTemplate template) {
        return args -> template.convertAndSend("saludos", new MessageDTO("Hola mundo"));
    }
    @Bean
    public Queue myQueue() {
        return new Queue("saludos", false, false, true);
    }
	@Bean
	public MessageConverter jsonConverter() {
		return new Jackson2JsonMessageConverter();
	}
//	@Bean
//	public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory) {
//		RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
//		rabbitTemplate.setMessageConverter(jsonConverter());
//		return rabbitTemplate;
//	}


}
