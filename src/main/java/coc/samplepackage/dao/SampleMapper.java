package coc.samplepackage.dao;

import coc.samplepackage.dto.SampleDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository("sampleMapper")
public interface SampleMapper {
	int sampleSelect(SampleDto dto);
}
