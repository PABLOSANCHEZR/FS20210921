package com.example;

import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class AppConfig {
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2).select().apis(RequestHandlerSelectors.basePackage("com.example"))
				.paths(PathSelectors.ant("/**")).build()
				.apiInfo(new ApiInfoBuilder().title("Microservicio: AMQP Receptor")
						.description("Monta diferentes escenacios para las pruebas de concepto de Microservicio.")
						.version("1.0").license("Apache License Version 2.0")
						.contact(new Contact("Yo Mismo", "http://www.example.com", "myeaddress@example.com")).build());
	}

	@Bean
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}

	@Bean
	public MessageConverter jsonConverter() {
		return new Jackson2JsonMessageConverter();
	}

	@RabbitListener(queues = "saludos")
	public void listen(MessageDTO in) {
		Store.add(new Message(in));
		System.out.println("\n\n" + in + "\n");
	}

}
