# Oxford-IIIT Pets
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** OxfordPets, Oxford Pets  

## State of the Field

**What it is.** Most commonly, papers treat Oxford-IIIT Pets as an image or visual classification benchmark. Definitions describe it as an image classification benchmark used for evaluating prediction correctness, while some papers frame it more specifically as a fine-grained pet-breed dataset, including a version described as pet images grouped into 37 breeds and used for fine-grained classification or few-shot learning. Snippets also place it in broader evaluation suites, for example as one of several datasets used for zero-shot and linear-probe image classification or as one of several visual classification datasets used to study personalization, generalization, and privacy.

**What it is claimed to measure.** Papers link this instrument to one behavioral indicator, Image classification, and to no constructs. The prevailing measurement claim is focused: papers use it to measure Image classification, rather than a wider set of linked outcomes. Definitions also say it is used to evaluate prediction correctness, few-shot learning performance, and personalized and generalized performance across clients, but papers do not link it to additional constructs or behavioral indicators.

**Space of uses.** Papers do not link it to any other measurement instrument, but they often use Oxford-IIIT Pets alongside other image classification datasets. It appears with CUB, Caltech101, Food101, DTD, and CIFAR-100, with several other benchmark datasets also mentioned, and another paper places it within a visual classification setting aimed at balancing personalization, generalization, and privacy. Across these descriptions, it is positioned as one benchmark within a broader evaluation suite, with uses spanning zero-shot, linear-probe, fine-grained classification, and few-shot settings.

## Sources

**[Beyond Accuracy: Ensuring Correct Predictions With Correct Rationales](https://proceedings.neurips.cc/paper_files/paper/2024/file/4bbeef01d9753fd5a29e9fd02d275698-Paper-Conference.pdf) (as "OxfordPets")**
> An image classification benchmark used for evaluating prediction correctness.

**[Weighted Multi-Prompt Learning with Description-free Large Language Model Distillation](https://proceedings.iclr.cc/paper_files/paper/2025/file/284e7ef68bf3d8fa42abf45a39f29f5e-Paper-Conference.pdf) (as "Oxford Pets")**
> A dataset for fine-grained classification of pet breeds, used to evaluate few-shot learning performance.

## Relationships

### → Oxford-IIIT Pets
- **Image classification** (behaviors tasks) — *measured_by*
  > Image classification is performed on the CIFAR-100 (Krause et al., 2013), DTD (Cimpoi et al., 2014), EuroSAT (Helber et al., 2019), and Oxford-Pets (Parkhi et al., 2012) datasets. (Section 4.7)
  - [SSH: Sparse Spectrum Adaptation via Discrete Hartley Transformation](https://aclanthology.org/2025.naacl-long.522.pdf)
