# Stanford Cars
**Type:** Measurement  
**Referenced in:** 12 papers  
**Also known as:** Stanford-Cars, Cars, StanfordCars  

## State of the Field

**What it is.** Across papers, Stanford Cars is most commonly described as a fine-grained image classification benchmark or dataset for car models. Several definitions specify that it contains 196 classes or categories of cars, and some frame it as assessing fine-grained visual discrimination, while a smaller framing presents it more generally as an image classification benchmark used to test downstream performance. Papers also place it within broader image recognition and fine-grained visual classification benchmark suites.

**What it is claimed to measure.** In the recorded relationships, papers use Stanford Cars to measure the behavioral indicator Image classification. It is linked to 1 behavioral indicator and no constructs, so the recorded measurement use centers on a single target rather than being spread across multiple constructs. The relationship evidence describes this use in image recognition, zero-shot classification, downstream performance, and broader classification-domain evaluations.

**Space of uses.** Usage is usually as one dataset among several benchmarks, rather than as a standalone protocol. Snippets place it in zero-shot and linear-probe image classification, downstream performance testing, and fine-tuning of pretrained models, and the only linked instrument is FGVC, to which one paper relates it as one of the datasets in a fine-grained visual classification benchmark.

## Sources

**[Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)**
> Stanford Cars, a car model classification benchmark used to assess fine-grained visual discrimination.

**[A Multi-Level Framework for Accelerating Training Transformer Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/33f2c200b71ce947d356d171022458ec-Paper-Conference.pdf) (as "Stanford-Cars")**
> Stanford-Cars is an image classification benchmark used here to test downstream performance of DeiT-B.

**[Portable Reward Tuning: Towards Reusable Fine-Tuning across Different Pretrained Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chijiwa25a/chijiwa25a.pdf) (as "Cars")**
> The Stanford Cars dataset, a benchmark for fine-grained image classification consisting of 196 classes of cars.

**[Beyond Accuracy: Ensuring Correct Predictions With Correct Rationales](https://proceedings.neurips.cc/paper_files/paper/2024/file/4bbeef01d9753fd5a29e9fd02d275698-Paper-Conference.pdf) (as "StanfordCars")**
> A fine-grained image classification dataset containing images of 196 classes of cars.

## Relationships

### → Stanford Cars
- **Image classification** (behaviors tasks) — *measured_by*
  > We evaluate our method on 12 image recognition datasets. We use the ... Stanford Cars (Krause et al., 2013)... (Section 4)
  - [Follow-Up Differential Descriptions: Language Models Resolve Ambiguities for Image Classification](https://proceedings.iclr.cc/paper_files/paper/2024/file/17eca81974d2fd34f458916e0bfd820d-Paper-Conference.pdf)

### Associated with
- **FGVC** (measurements)
  > FGVC includes five Fine-Grained Visual Classification datasets: ... Stanford Cars (Gebru et al., 2017). (Section 5.1)
  - [Revisiting Prefix-tuning: Statistical Benefits of Reparameterization among Prompts](https://proceedings.iclr.cc/paper_files/paper/2025/file/760dff0f9c0e9ed4d7e22918c73351d4-Paper-Conference.pdf)
