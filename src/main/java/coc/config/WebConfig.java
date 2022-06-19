package coc.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

	private final HandlerInterceptor channel;

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(channel)
				.addPathPatterns("/*")
				.excludePathPatterns("/resources/**");
	}

}