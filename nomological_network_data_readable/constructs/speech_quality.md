# Speech quality
**Type:** Construct  
**Referenced in:** 3 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** In the available usage, speech quality is described as the perceptual quality of synthesized speech output, with naturalness, clarity, and absence of artifacts named as its main aspects. The same paper also treats it as a performance dimension alongside conversational abilities, and no competing definition appears.

**Space of facets.** The only explicit breakdown treats naturalness, clarity, and absence of artifacts as the facets of the construct. Beyond those aspects, the paper does not introduce subtypes, broader taxonomies, or contrasts with nearby constructs.

**Space of measurement.** Papers link speech quality to no measurement instruments, one behavioral indicator, and no constructs. In operational use, the only paper measures it by computing VisQOL and MOSNet on reconstructed speech, explicitly targeting the reconstructed speech output.

**Links.** One paper claims a causal relationship from Speech enhancement to Speech quality, describing speech enhancement as aiming to improve the intelligibility and quality of speech when degradation is caused by various noises.

## Sources

**[Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf)**
> The perceptual quality of the synthesized speech output, including aspects like naturalness, clarity, and absence of artifacts.

## Relationships

### Speech quality →
- **UTMOS** (measurements) — *measured_by*
  > ...as well as UTMOS (Saeki et al., 2022) to evaluate overall speech quality following Fang et al. (2024). (Section 3.1)
  - [Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf)
- **ViSQOL** (measurements) — *measured_by*
  > For speech quality, following D´efossez et al. (2024), we compute VisQOL (Hines et al., 2015) and MOSNet (Lo et al., 2019) of the reconstructed speech. (Section 2.1)
  - [Scaling Speech-Text Pre-training with Synthetic Interleaved Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/7b5ae891000049b91b3b62de596b1560-Paper-Conference.pdf)

### → Speech quality
- **Speech enhancement** (behaviors tasks) — *causes*
  > Speech enhancement (SE) aims to improve the intelligibility and quality of speech, particularly in situations where degradation is caused by various noises. (Section 1)
  - [GenSE: Generative Speech Enhancement via Language Models using Hierarchical Modeling](https://proceedings.iclr.cc/paper_files/paper/2025/file/acde98fb254b8021d194ccdb80a1241e-Paper-Conference.pdf)
