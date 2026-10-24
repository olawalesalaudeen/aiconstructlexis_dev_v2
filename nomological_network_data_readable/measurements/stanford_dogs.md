# Stanford Dogs
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the papers, Stanford Dogs is treated as a fine-grained visual classification or recognition resource centered on 120 breeds of dogs. The prevailing description places it within the FGVC benchmark, with one paper stating that FGVC includes Stanford Dogs among five Fine-Grained Visual Classification datasets. A smaller usage describes the same benchmark after task reformulation, where it is used as a 4-way multiple-choice question task.

**What it is claimed to measure.** Papers link Stanford Dogs to one construct and one behavioral indicator. It is used to measure fine-grained perception in work that lists it among fine-grained benchmarks for ablation studies, and it is also used to measure image classification in work that includes it among image recognition datasets. The reported measurement claims therefore converge on these two targets rather than spreading across many constructs or indicators.

**Space of uses.** Papers position Stanford Dogs alongside one linked instrument, FGVC, by treating it as part of that benchmark collection. In use, it appears within broader evaluation suites rather than in isolation, for example among image recognition datasets in one study and among fine-grained benchmarks in another. One paper also uses it after reformulating the task into a 4-way multiple-choice setting.

## Sources

**[Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)**
> A dataset within the FGVC benchmark for the fine-grained visual classification of 120 breeds of dogs.

## Relationships

### → Stanford Dogs
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Stanford Dogs (Khosla et al., 2011) datasets. (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)
- **Fine-grained perception** (constructs) — *measured_by*
  > Ablation results on fine-grained perception tasks. We conduct ablation studies based on LLaVA across five fine-grained benchmarks: ... Stanford Dogs (Khosla et al., 2011)... (Table 3)
  - [SEA: Supervised Embedding Alignment for Token-Level Visual-Textual Integration in MLLMs](https://aclanthology.org/2025.emnlp-main.55.pdf)

### Associated with
- **FGVC** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: ... Stanford Dogs (Khosla et al., 2011)... (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
