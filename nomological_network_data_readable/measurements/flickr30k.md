# Flickr30k
**Type:** Measurement  
**Referenced in:** 46 papers  
**Also known as:** Flickr30K, FLICKR30K  

## State of the Field

**What it is.** Across the papers, Flickr30k is most commonly treated as a benchmark built from 30,000 Flickr images paired with captions, usually described as five descriptive sentences or captions per image. The prevailing framing is image captioning, including image-level and zero-shot caption generation, though several papers also describe it as an image-text retrieval benchmark where models match images to captions or the reverse. A smaller line of work uses it for text-to-image generation, and one paper specifies the Flickr30k Karpathy split test set.

**What it is claimed to measure.** Papers use Flickr30k to measure five behavioral indicators and two constructs. The most common claim is that it measures Image captioning, with papers using it to assess image-level caption ability, zero-shot caption generation, and general image captioning; Cross-modal retrieval is the next most frequent usage, including image-to-text and text-to-image retrieval. Smaller lines of work report it as measuring Image generation, Information retrieval, and Synthetic recall, and papers also use it to measure the constructs Multimodal understanding and Visual perception, so the reported measurement claims extend beyond a single outcome.

**Space of uses.** Papers usually position Flickr30k as a standard or widely used benchmark, and they use it in zero-shot, few-shot, and fine-tuned evaluations. Papers do not link it to another measurement instrument, although they often evaluate it alongside MS-COCO and NoCaps for captioning, and alongside MS-COCO for retrieval or text-to-image generation. Some papers also single out the Karpathy split or report task-specific metrics such as Recall@1/5, CLIP similarity, and captioning metrics including CIDEr, BLEU, METEOR, and ROUGE-L.

**Concerns raised.** Concerns are limited but present. In retrieval work, one paper states that performance on popular cross-modal retrieval benchmarks such as Flickr30K has "reached saturation." In few-shot use, another paper reports that "the few-shot performance of Flickr30K decreases with examples given."

## Sources

**[Frozen Transformers in Language Models Are Effective Visual Encoder Layers](https://proceedings.iclr.cc/paper_files/paper/2024/file/03cd3cf3f74d4f9ce5958de269960884-Paper-Conference.pdf)**
> Image-text retrieval benchmark where models match images to corresponding captions or vice versa.

**[MMICL: Empowering Vision-language Model with Multi-Modal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/41128e5b3a7622da5b17588757599077-Paper-Conference.pdf) (as "Flickr30K")**
> Image captioning dataset with 30,000 images and associated captions, used to evaluate vision-to-text generation and in-context learning effects.

**[HEMM: Holistic Evaluation of Multimodal Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b6e5dae3acb4cfdfe5928a6eff174ee-Paper-Datasets_and_Benchmarks_Track.pdf) (as "FLICKR30K")**
> An image captioning dataset consisting of 30,000 images collected from Flickr, each with multiple descriptive captions.

## Relationships

### → Flickr30k
- **Image captioning** (behaviors tasks) — *measured_by*
  > We first quantitatively evaluate the zero-shot multi-modal understanding capacity of LaVIT on Image Captioning (NoCaps (Agrawal et al., 2019), Flickr30k (Plummer et al., 2015)) (Section 4.1)
  - [Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization](https://proceedings.iclr.cc/paper_files/paper/2024/file/e1762b64958760f7bfabe3a7062d007f-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > We evaluate the performance of Causal Q-Former on the image-text retrieval using COCO (Lin et al., 2014) and Flickr30K (Young et al., 2014). (Section 4)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **Image generation** (behaviors tasks) — *measured_by*
  > We evaluate the text-to-image generation on MS-COCO (Chen et al., 2015) and Flickr30K (Young et al., 2014) and compute the pair-wise CLIP similarity score as the evaluation metric following GILL (Koh et al., 2023b). (Section 4.1.1)
  - [Making LLaMA SEE and Draw with SEED Tokenizer](https://proceedings.iclr.cc/paper_files/paper/2024/file/97011c648eda678424f9292dadeae72e-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > “Visual perception is assessed through image captioning, where VLMs produce descriptions of the input images, or visual-question answering (VQA), where VLMs are asked to answer questions pertaining to the images. VHELM uses scenarios such as Flickr-30k [46], VQAv2 [12], VizWiz [14] and POPE [23] to assess this aspect.”
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > Following LLaVA (Liu et al., 2024b), we evaluate the multimodal understanding capabilities of Show-o on POPE, MME, Flickr30k, VQAv2, GQA, and MMMU benchmarks. (Section 4.1)
  - [Show-o: One Single Transformer to Unify Multimodal Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/45f0d179ef7e10eb7366550cd4e574ae-Paper-Conference.pdf)
