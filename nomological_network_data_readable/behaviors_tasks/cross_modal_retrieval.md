# Cross-modal retrieval
**Type:** Behavior  
**Referenced in:** 48 papers  
**Also known as:** Image-text matching, Image-caption matching, Compositional image-text matching, Audio-to-text retrieval, Text-to-audio retrieval, Image-text retrieval, Text-image retrieval, Text-to-image retrieval, Text-to-video retrieval, Video-to-text retrieval, Video retrieval, Composed image retrieval, Visual question answering retrieval, Image retrieval, Image-to-text retrieval, Long-text-image retrieval, Short-text-image retrieval, Species identification, Retrieval  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is retrieval across modalities: a model takes a query in one modality and retrieves the matching item in another, most often in bidirectional text-to-image and image-to-text form, but also in video-text, audio-text, and graph-text or text-graph settings. Success is usually framed as returning or ranking the most relevant item from a database or candidate set, though some papers cast the same behavior as image-text matching, where the model chooses the best image or caption, or decides whether a caption describes an image. The task is therefore operationalized both as large-collection ranking and as binary or two-option selection, and a few papers explicitly work with matching scores or logits.

**Variants.** Most variants stay close to image-text retrieval, including long-text and short-text query settings, region-level as well as image-level retrieval, and composed image retrieval where a source image is combined with textual modifications. Smaller strands study text-to-video and video-to-text retrieval, audio-to-text and text-to-audio retrieval, visual question answering retrieval that seeks a document containing the answer to an image-based question, species identification queries, sketch-based image retrieval, and ASL-based retrieval. Some papers narrow the task further to compositional or minimal-change matching, using distractors that alter objects, attributes, or relations, or forcing selection between two images or two captions.

**Space of elicitation and scores.** Papers link cross-modal retrieval to 11 measurement instruments, all through measured_by claims. The most commonly linked instruments are MS-COCO and Flickr30k, followed by AudioCaps, CUB-200-2011, and Clotho; other linked benchmarks cover image-text matching and text-to-video retrieval settings. These instruments are usually datasets or benchmarks, and the reported evaluations include recall-style metrics such as Recall at 1/5 and R@1, R@5, and R@10. Beyond benchmark choice, one paper says it is measured by visual dialogue, one paper relates it to boolean question answering by converting text into yes or no questions to assess visual-textual alignment, and papers claim a causal relationship from ranking to cross-modal retrieval through reranking that boosts retrieval accuracy or mAP.

**What it is taken as evidence of.** Papers link cross-modal retrieval to 3 constructs rather than a single agreed target. One paper uses it to measure long-context understanding, stating that long-text-image retrieval evaluates a model's ability to comprehend long texts, and another uses it to measure multimodal alignment through zero-shot text-to-image and image-to-text retrieval at multiple hierarchical levels. Separately, one paper reports that cross-modal retrieval is related to modality bias, describing underperformance in these tasks as due to modality bias.

## Sources

**[BioBridge: Bridging Biomedical Foundation Models via Knowledge Graphs](https://proceedings.iclr.cc/paper_files/paper/2024/file/4a5a9f5c15632e9f52c9c1ba4134f13c-Paper-Conference.pdf)**
> Retrieving content from one modality (e.g., image) based on input from another modality (e.g., text), including both image-to-text and text-to-image directions.

**[DevBench: A multimodal developmental benchmark for language learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8d987b2981388c99c7eab6095d1d29fd-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Image-text matching")**
> The general task of determining the correspondence or similarity between a given image and a piece of text, often by producing a score.

**[VisMin: Visual Minimal-Change Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/c3070c3388552a08a3326f0d28dc2af9-Paper-Conference.pdf) (as "Image-caption matching")**
> Selecting the correct caption for an image or the correct image for a caption from two alternatives.

**[TripletCLIP:  Improving Compositional Reasoning of CLIP via Synthetic Vision-Language Negatives](https://proceedings.neurips.cc/paper_files/paper/2024/file/39781da4b5d05bc2908ce08e43bc6404-Paper-Conference.pdf) (as "Compositional image-text matching")**
> The task of correctly identifying the matching image-text pair from a set of distractors that involve compositional changes in objects, attributes, or relations.

**[Learning Spatially-Aware Language and Audio Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/3acc054949b6948d4444b35d412cab56-Paper-Conference.pdf) (as "Audio-to-text retrieval")**
> Given an audio input, the model retrieves the matching text caption from a candidate set.

**[Learning Spatially-Aware Language and Audio Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/3acc054949b6948d4444b35d412cab56-Paper-Conference.pdf) (as "Text-to-audio retrieval")**
> Given a text caption, the model retrieves the matching audio sample from a candidate set.

**[TIGeR: Unifying Text-to-Image Generation and Retrieval with Large Multimodal Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0a9bc5536c595ee44a72b575b258d141-Paper-Conference.pdf) (as "Text-to-image retrieval")**
> The task of selecting and returning an existing image from a database that best matches a given textual description.

**[Youku Dense Caption: A Large-scale Chinese Video Dense Caption Dataset and Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f3cbee17170c3ffff3e413d2df54f6b-Paper-Conference.pdf) (as "Text-to-video retrieval")**
> Ranking videos given a textual query.

**[Youku Dense Caption: A Large-scale Chinese Video Dense Caption Dataset and Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f3cbee17170c3ffff3e413d2df54f6b-Paper-Conference.pdf) (as "Video-to-text retrieval")**
> Retrieving relevant text descriptions from a collection based on a video query.

**[Youku Dense Caption: A Large-scale Chinese Video Dense Caption Dataset and Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/1f3cbee17170c3ffff3e413d2df54f6b-Paper-Conference.pdf) (as "Video retrieval")**
> Retrieving videos that are relevant to a textual query, including partially relevant videos from a larger collection.

**[Causal Graphical Models for Vision-Language Compositional Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/b9a17133e3943509243b5e197c1c23b2-Paper-Conference.pdf) (as "Image-text retrieval")**
> The task of selecting the most relevant text caption for a given image from a set of candidates, or vice-versa.

**[LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf) (as "Text-image retrieval")**
> Retrieving images or text items based on cross-modal similarity between text and images.

**[MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf) (as "Composed image retrieval")**
> The observable task of retrieving a target image based on a query that combines a source image with a textual description of desired modifications.

**[MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf) (as "Visual question answering retrieval")**
> The observable task of retrieving a document (e.g., text or an image-description pair) that contains the answer to a question posed about a given image.

**[MMIU: Multimodal Multi-image Understanding for Evaluating Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/5f92032278b1c70946e0b753068de51e-Paper-Conference.pdf) (as "Image retrieval")**
> The task of finding and selecting a correct target image from a set of candidates based on a query, such as matching a sketch to a natural image.

**[LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf) (as "Image-to-text retrieval")**
> Given an image, finding the most semantically similar text description from a collection of candidate texts.

**[LoTLIP: Improving Language-Image Pre-training for Long Text Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/77828623211df05497ce3658300dafd9-Paper-Conference.pdf) (as "Long-text-image retrieval")**
> The task of retrieving the correct image from a set given a long, detailed text query, or retrieving the correct text given an image.

**[LoTLIP: Improving Language-Image Pre-training for Long Text Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/77828623211df05497ce3658300dafd9-Paper-Conference.pdf) (as "Short-text-image retrieval")**
> The task of retrieving the correct image from a set given a short, concise text query, or retrieving the correct text given an image.

**[INQUIRE: A Natural World Text-to-Image Retrieval Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4ad9c75f0d60ed75700f020adb3f705-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Species identification")**
> Retrieving images that match a query about a particular species or taxon.

**[FLEURS-ASL: Including American Sign Language in Massively Multilingual Multitask Evaluation](https://aclanthology.org/2025.naacl-long.314.pdf) (as "Retrieval")**
> Selecting the correct matching item or text from candidates based on ASL input.

## Relationships

### Cross-modal retrieval →
- **MS-COCO** (measurements) — *measured_by*
  > We evaluate the performance of Causal Q-Former on the image-text retrieval using COCO (Lin et al., 2014) and Flickr30K (Young et al., 2014). (Section 4)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **Flickr30k** (measurements) — *measured_by*
  > We evaluate the performance of Causal Q-Former on the image-text retrieval using COCO (Lin et al., 2014) and Flickr30K (Young et al., 2014). (Section 4)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **CUB-200-2011** (measurements) — *measured_by*
  > we provide several image-to-text retrieval cases on CelebA-HQ and CUB-200 datasets based on VQ-GAN+LG. (Section 4.3)
  - [LG-VQ: Language-Guided Codebook Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **AudioCaps** (measurements) — *measured_by*
  > “Table 3: Semantic retrieval (R@1, R@5, and R@10) for CLAP and ELSA calculated over the original (non-spatial) versions of Clotho and AudioCaps.”
  - [Learning Spatially-Aware Language and Audio Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/3acc054949b6948d4444b35d412cab56-Paper-Conference.pdf)
- **Clotho** (measurements) — *measured_by*
  > “Table 3: Semantic retrieval (R@1, R@5, and R@10) for CLAP and ELSA calculated over the original (non-spatial) versions of Clotho and AudioCaps.”
  - [Learning Spatially-Aware Language and Audio Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/3acc054949b6948d4444b35d412cab56-Paper-Conference.pdf)
- **Winoground** (measurements) — *measured_by*
  > Image-text matching evaluation through binary retrieval tasks... We report results on two benchmarks (Winoground (Thrush et al., 2022), EqBen (Wang et al., 2023b))
  - [Natural Language Inference Improves Compositionality in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7eeec4dffcfe4912482ffbf2ab8ddb41-Paper-Conference.pdf)
- **MuirBench** (measurements) — *measured_by*
  > [IMAGE-TEXT MATCHING] aims to evaluate the ability of models to understand the meaning of a text snippet and match it with the corresponding visual content or vice versa. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **MSR-VTT** (measurements) — *measured_by*
  > We evaluate X-CoT on four benchmarks: MSR-VTT (Xu et al., 2016), MSVD (Chen and Dolan, 2011), LSMDC (Rohrbach et al., 2015), and DiDeMo (Anne Hendricks et al., 2017).
  - [X-CoT: Explainable Text-to-Video Retrieval via LLM-based Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1588.pdf)
- **MSVD** (measurements) — *measured_by*
  > We evaluate X-CoT on four benchmarks: MSR-VTT (Xu et al., 2016), MSVD (Chen and Dolan, 2011), LSMDC (Rohrbach et al., 2015), and DiDeMo (Anne Hendricks et al., 2017).
  - [X-CoT: Explainable Text-to-Video Retrieval via LLM-based Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1588.pdf)
- **LSMDC** (measurements) — *measured_by*
  > We evaluate X-CoT on four benchmarks: MSR-VTT (Xu et al., 2016), MSVD (Chen and Dolan, 2011), LSMDC (Rohrbach et al., 2015), and DiDeMo (Anne Hendricks et al., 2017).
  - [X-CoT: Explainable Text-to-Video Retrieval via LLM-based Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1588.pdf)
- **DiDeMo** (measurements) — *measured_by*
  > We evaluate X-CoT on four benchmarks: MSR-VTT (Xu et al., 2016), MSVD (Chen and Dolan, 2011), LSMDC (Rohrbach et al., 2015), and DiDeMo (Anne Hendricks et al., 2017).
  - [X-CoT: Explainable Text-to-Video Retrieval via LLM-based Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.1588.pdf)
- **VisDial** (measurements) — *measured_by*
  > In cross-modal retrieval, we use the Visual Dialog (Das et al., 2017) dataset for the comparability to previous work (Koh et al., 2023).
  - [Bridging Vision and Language Spaces with Assignment Prediction](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f20f2b0315c72201e23512fdbd1ee91-Paper-Conference.pdf)

### → Cross-modal retrieval
- **Ranking** (behaviors tasks) — *causes*
  > We find that MLLMs can be used as zero-shot rerankers to further boost retrieval accuracy in challenging tasks that require the understanding of multimodal queries, such as ... composed image retrieval. (Section 6)
  - [MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf)

### Associated with
- **Modality bias** (constructs)
  > it underperforms compared to a smaller CLIP retriever in cross-modal retrieval tasks due to the modality bias exhibited by MLLMs. (Section 1)
  - [MM-EMBED: UNIVERSAL MULTIMODAL RETRIEVAL WITH MULTIMODAL LLMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/6d5d6afa9957cfc9142ba60e78a467e9-Paper-Conference.pdf)
- **Long-context understanding** (constructs)
  > The long-text-image retrieval task necessitates the alignment of text features from long texts with the image features from the corresponding images, which thereby evaluates the model’s ability to comprehend long texts. (Section 4.1)
  - [LoTLIP: Improving Language-Image Pre-training for Long Text Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/77828623211df05497ce3658300dafd9-Paper-Conference.pdf)
- **Multimodal alignment** (constructs)
  > In our study, we evaluate pretrained models’ cross-modal alignment efficacy by conducting both zero-shot text-to-image and image-to-text retrieval tasks in multiple hierarchical levels. (Section 4.2)
  - [Procedure-Aware Surgical Video-language Pretraining with Hierarchical Knowledge Augmentation](https://proceedings.neurips.cc/paper_files/paper/2024/file/de0f2a9943b7bd060e5c10c2fb2654f3-Paper-Conference.pdf)
