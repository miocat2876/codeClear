package coc.samplepackage.mapper;

import coc.samplepackage.dto.SampleDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("sampleMapper")
public interface SampleMapper {
	int sampleSelect(SampleDto dto);
}
