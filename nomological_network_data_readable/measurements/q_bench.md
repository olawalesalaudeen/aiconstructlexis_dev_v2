# Q-Bench
**Type:** Measurement  
**Referenced in:** 7 papers  
**Also known as:** QBench-Testset, QBench  

## State of the Field

**What it is.** Across the definitions, Q-Bench is most commonly described as a benchmark for low-level vision tasks or for assessing low-level visual capabilities in general-purpose foundation models and MLLMs. One paper further presents it as covering perception, description, and quality assessment, while another use treats it as an existing benchmark for in-domain multi-image evaluation. A test-set variant, QBench-Testset (QBenchT), is also named.

**What it is claimed to measure.** Papers link Q-Bench to one construct, Multi-image reasoning, and one behavioral indicator, Image captioning. One paper uses it to measure multi-image reasoning in a multi-image task suite, and another uses its low-level visual description component to measure image captioning, describing that component as testing how accurately and thoroughly models describe attributes, as noted in Meteor: Mamba-based Traversal of Rationale for Large Language and Vision Models.

**Space of uses.** In the cited uses, Q-Bench appears as one benchmark within broader evaluation suites rather than as a standalone protocol. Papers place it alongside NLVR2 in an in-domain multi-image setup, alongside Mantis-Eval and BLINK for multi-image tasks, and alongside SEED-Bench Image Part and MM-Vet when reporting results.

## Sources

**[LLaVA-Interleave: Tackling Multi-image, Video, and 3D in Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c9f95e9ec39fa5ad3d0a562b993b92aa-Paper-Conference.pdf)**
> A benchmark used in the paper for in-domain multi-image evaluation.

**[InternLM-XComposer2-4KHD: A Pioneering Large Vision-Language Model Handling Resolutions from 336 Pixels to 4K HD](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b06cdddb1cde6624c0be1465c7b800f-Paper-Conference.pdf) (as "QBench-Testset")**
> QBench-Testset (QBenchT) is a benchmark for evaluating general-purpose foundation models on low-level vision tasks.

**[MoVA: Adapting Mixture of Vision Experts to Multimodal Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/bb0fea29f7aa6ede17e906ac6a225f34-Paper-Conference.pdf) (as "QBench")**
> A benchmark used to evaluate general-purpose foundation models on low-level vision tasks.

## Relationships

### → Q-Bench
- **Multi-image reasoning** (constructs) — *measured_by*
  > For multi-image tasks, we incorporate Mantis-Eval (Jiang et al., 2024), QBench (Wu et al., 2024b), and BLINK (Fu et al., 2024b), in line with LLaVA-Interleave (Li et al., 2024a). (Section 2.1)
  - [Design Choices for Extending the Context Length of Visual Language Models](https://aclanthology.org/2025.acl-long.1603.pdf)
