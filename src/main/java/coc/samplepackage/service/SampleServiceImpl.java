package coc.samplepackage.service;

import coc.samplepackage.mapper.SampleMapper;
import coc.samplepackage.dto.SampleDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service("sampleServiceImpl")
public class SampleServiceImpl implements SampleService {

	private final SampleMapper sampleMapper;

	public int sample(SampleDto dto){
		return sampleMapper.sampleSelect(dto);
	}
	
}
