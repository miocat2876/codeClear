package coc.freeBoard.service;

import coc.freeBoard.dto.FreeBoardDto;
import coc.freeBoard.mapper.FreeBoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional
@Service("freeBoardService")
public class FreeBoardServiceImpl implements FreeBoardService {

	private final FreeBoardMapper freeBoardMapper;

	public int sample(FreeBoardDto dto){
		return freeBoardMapper.create(dto);
	}
	
}
